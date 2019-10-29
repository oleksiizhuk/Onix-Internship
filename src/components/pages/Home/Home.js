import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';
import TableItem from './components/TableItem';
import HeroItems from './components/HeroItem';
import personalData from '../../../mock/person';
import chronologyEvents from '../../../mock/chronologyEvents';

const Home = () => {
  const [chronology, setChronology] = useState(chronologyEvents);
  const person = personalData;
  const [tableYear, setTableYear] = useState('');
  const [tableLabel, setTableLabel] = useState('');
  const [userChoice, setUserChoice] = useState('planets');
  const [activeElement, setActiveElement] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(false);
  const [loadingHero, setLoadingHero] = useState(false);
  const [lastIndex, setLastIndex] = useState({ id: 2 });
  const [draggedItem, setDraggedItem] = useState();

  const planetButton = [
    {
      name: 'planets',
      label: 'planets'
    },
    {
      name: 'characters',
      label: 'characters'
    }
  ];

  function createTableObject(year, text, index) {
    return {
      [index]: {
        age: year,
        events: text
      }
    };
  }

  const tableSortObject = () => {
    const { items } = chronology;
    const sorted = {};
    Object
      .keys(items)
      .sort((a, b) => {
        return items[a].age - items[b].age;
      })
      .forEach((key, index) => {
        sorted[index] = { ...items[key] };
      });
    setChronology({ items: { ...sorted } });
  };

  const deleteTableItem = (id) => {
    const { items } = chronology;
    const newObject = Object.keys(items)
      .reduce((acc, index) => {
        if (index !== id) {
          acc[index] = items[index];
        }
        return acc;
      }, {});
    setChronology({ items: { ...newObject } });
  };

  function createTableItem(age, text, index) {
    return (
      <li key={index} className="section-4__item-li">
        <TableItem
          age={age}
          text={text}
          onDeleteItem={() => deleteTableItem(index)}
        />
      </li>
    );
  }
  function createTable() {
    const { items } = chronology;
    const newElements = [];
    Object.keys(items).forEach((index) => {
      if (Object.prototype.hasOwnProperty.call(items, index)) {
        newElements[index] = createTableItem(items[index].age, items[index].events, index);
      }
    });
    return newElements;
  }

  function addItemObject() {
    const { items } = chronology;
    const { id: index } = lastIndex;
    const newIndex = index + 1;
    const newItem = createTableObject(tableYear, tableLabel, newIndex);
    setChronology({ items: { ...items, ...newItem } });
    setLastIndex({ id: newIndex });
  }

  const onLabelChange = (e) => {
    setTableLabel(e.target.value);
  };

  const onYearChange = (e) => {
    setTableYear(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItemObject(tableYear, tableLabel);
    setTableYear('');
    setTableLabel('');
  };


  function onFilterChange(choice) {
    setUserChoice(choice);
  }

  function createButtons() {
    return planetButton.map(({ name, label }) => {
      const isActive = userChoice === name;
      const clazz = isActive ? 'active-button' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={label}
          onClick={() => onFilterChange(name)}
        >
          {name}
        </button>
      );
    });
  }

  function onDragStart(e, index) {
    setDraggedItem(heroes[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
  }

  function onDragOver(index) {
    const selectedHero = heroes;
    const draggedOverItem = selectedHero[index];
    if (draggedItem === draggedOverItem) {
      return;
    }
    const hero = selectedHero.filter((item) => item !== draggedItem);
    hero.splice(index, 0, draggedItem);
    setActiveElement(index);
    setHeroes(hero);
  }
  function handleClick(e, index) {
    if (e.ctrlKey || e.metaKey) {
      if (activeElement === index) {
        setActiveElement(null);
      }
      return;
    }
    if (e.altKey) {
      setActiveElement(index);
    }
  }
  function heroItem() {
    const items = heroes.map((item, index) => {
      const {
        id, name, ell1, ell2, ell3
      } = item;
      return (
        <div
          className={`draggable__item__li ${activeElement === index ? 'drag__active' : ''}`}
          key={item.id}
          onDragOver={() => onDragOver(index)}
          onClick={(e) => handleClick(e, index)}
          onKeyPress={(e) => handleClick(e, index)} // esLint
          role="button"
          tabIndex="0"
        >
          <div
            className="drag"
            draggable
            onDragStart={(e) => onDragStart(e, index)}
          >
            <HeroItems
              id={id}
              name={name}
              ell1={ell1}
              ell2={ell2}
              ell3={ell3}
            />
          </div>
        </div>
      );
    });
    return (items);
  }

  async function getResource(url) {
    const apiBase = process.env.REACT_APP_API_BASE;
    const res = await fetch(`${apiBase}${url}`);
    return res.json();
  }

  function extractId({ url }) {
    const idRegExp = /\/(\d*)\/$/;
    return url.match(idRegExp)[1];
  }

  function transformPerson(value) {
    return {
      id: extractId(value),
      name: value.name,
      ell1: value.gender,
      ell2: value.birth_year,
      ell3: value.eye_color
    };
  }

  async function getAllPeople() {
    const res = await getResource('/people/');
    return res.results.map((item) => {
      return transformPerson(item);
    });
  }
  useEffect(() => {
    getAllPeople()
      .then((hero) => {
        setHeroes(hero);
        setLoadingHero(true);
      })
      .catch(() => {
        setError(!error);
      });
  }, [heroes.length]);

  const planetButtons = createButtons();
  const tableItems = createTable();
  const itemsHero = (loadingHero || !error) ? heroItem() : null;
  return (
    <HomeView
      person={person}

      tableItems={tableItems}
      tableLabel={tableLabel}
      tableYear={tableYear}
      onDeleteItem={deleteTableItem}
      onSortTable={tableSortObject}
      onTableLabelChange={onLabelChange}
      onTableYearChange={onYearChange}
      onTableSubmit={onSubmit}

      planetButtons={planetButtons}
      userChoice={userChoice}

      heroItems={itemsHero}
      heroError={error}
      loadingHero={loadingHero}
    />
  );
};

export default Home;
