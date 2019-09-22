import React, { Component } from 'react';
import HomeView from './HomeView';
import ErrorIndicator from './components/ErrorIndicator';
import TableItem from './components/TableItem';
import HeroItems from './components/HeroItem';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        id: 1,
        name: 'oleksii',
        surname: 'zhuk',
        age: '26',
        city: 'krop',
        interests: 'computer science',
        hobby: 'TV show, travel',
        job: 'frontend web developer',
        social: {
          fb: 'https://www.facebook.com/profile.php?id=100007163145347',
          twitter: 'https://twitter.com/Oleksii82814989',
          gMail: 'oleksiizhuk.att@gmail.com',
          github: 'https://github.com/oleksiizhuk',
          linkedIn: 'https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9'
            + '-%D0%B6%D1%83%D0%BA-317a92162'
        }
      },
      chronology: {
        items: {
          0: {
            age: '2993',
            events: 'родился'
          },
          1: {
            age: '2000',
            events: 'поступил в школу'
          },
          2: {
            age: '1000',
            events: 'тест'
          }
        }
      },
      lastIndex: {
        id: 2
      },
      info: null,
      hasError: false,
      tableLabel: '',
      tableYear: '',

      infoPlanet: {
        id: 2,
        ell1: null,
        ell2: null,
        ell3: null
      },
      filterPlanet: 'planets',
      loading: true,

      heroes: [],
      error: false,
      loadingHero: false,
      activeElement: null,
      planetButtons: [
        {
          name: 'planets',
          label: 'planets'
        },
        {
          name: 'characters',
          label: 'characters'
        }
      ]
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  componentWillUpdate = (nextProps, nextState) => {
    const { filterPlanet } = this.state;
    if (nextState.filterPlanet !== filterPlanet) {
      this.filter(nextState.filterPlanet);
    }
  };

  componentDidMount = () => {
    const { filterPlanet } = this.state;
    this.filter(filterPlanet);

    this.getAllPeople()
      .then((heroes) => {
        this.setState({
          heroes,
          loadingHero: true
        });
      })
      .catch(() => {
        const { error } = this.state;
        this.setState({ error: !error });
      });
  };

  getResource = async (url) => {
    const apiBase = process.env.REACT_APP_API_BASE;
    const res = await fetch(`${apiBase}${url}`);
    return res.json();
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this.transformPerson(person);
  };


  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  extractId = ({ url }) => {
    const idRegExp = /\/(\d*)\/$/;
    return url.match(idRegExp)[1];
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map((item) => {
      return this.transformPerson(item);
    });
  };

  transformPlanet(planet) {
    return {
      id: this.extractId(planet),
      name: planet.name,
      ell1: planet.population,
      ell2: planet.rotation_period,
      ell3: planet.diameter
    };
  }

  transformPerson(person) {
    return {
      id: this.extractId(person),
      name: person.name,
      ell1: person.gender,
      ell2: person.birth_year,
      ell3: person.eye_color
    };
  }


  // table
  createTableObject = (year, text, index) => {
    return {
      [index]: {
        age: year,
        events: text
      }
    };
  };

  addItemObject = () => {
    const {
      tableYear, tableLabel, lastIndex: { id: lastIndex }, chronology: { items }
    } = this.state;
    const newIndex = lastIndex + 1;
    const newItem = this.createTableObject(tableYear, tableLabel, newIndex);
    this.setState({
      chronology: { items: { ...items, ...newItem } },
      lastIndex: { id: newIndex }
    });
  };

  deleteTableItem = (id) => {
    const { chronology: { items } } = { ...this.state };
    const newObject = Object.keys(items)
      .reduce((acc, index) => {
        if (index !== id) {
          acc[index] = items[index];
        }
        return acc;
      }, {});
    this.setState({
      chronology: { items: { ...newObject } }
    });
  };

  tableSortObject = () => {
    const { chronology: { items } } = { ...this.state };
    const sorted = {};
    Object
      .keys(items)
      .sort((a, b) => {
        return items[a].age - items[b].age;
      })
      .forEach((key, index) => {
        sorted[index] = { ...items[key] };
      });
    this.setState({
      chronology: { items: { ...sorted } }
    });
  };

  onLabelChange = (e) => {
    this.setState({
      tableLabel: e.target.value
    });
  };

  onYearChange = (e) => {
    this.setState({
      tableYear: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { tableYear, tableLabel } = this.state;
    this.addItemObject(tableYear, tableLabel);
    this.setState({
      tableLabel: '',
      tableYear: ''
    });
  };

  createTable = () => {
    const { chronology: { items } } = { ...this.state };
    const newElements = [];
    for (const index in items) {
      newElements[index] = this.createTableItem(items[index].age, items[index].events, index);
    }
    return newElements;
  };

  /* createTable = () => {
    const { chronology: { items } } = { ...this.state };
    const newEl = Object.keys(items);
    console.log(newEl);
    const newElements = newEl
      .map((item, index) => {
        console.log(items[index].age);
        console.log(items);
        return this.createTableItem(items[index].age, items[index].events, index.toString());
      });
    return newElements;
  }; */

  createTableItem = (age, text, index) => {
    return (
      <li key={index} className="section-4__item-li">
        <TableItem
          age={age}
          text={text}
          onDeleteItem={() => this.deleteTableItem(index)}
        />
      </li>
    );
  };
  // Table ***

  // Planet ***
  createButtons = () => {
    const { filterPlanet, planetButtons } = this.state;
    return planetButtons.map(({ name, label }) => {
      const isActive = filterPlanet === name;
      const clazz = isActive ? 'active-button' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={label}
          onClick={() => this.onFilterChange(name)}
        >
          {name}
        </button>
      );
    });
  };

  onFilterChange = (filterPlanet) => {
    this.setState({ filterPlanet });
  };

  generationRandomId = () => Math.floor(Math.random() * 10 + 2);

  getItem = (query) => {
    query(this.generationRandomId())
      .then((infoPlanet) => {
        this.setState({
          infoPlanet,
          loading: false
        });
      });
  };

  onLoadingFalse = () => {
    this.setState(
      { loading: true }
    );
  };

  filter = (filterPlanet) => {
    this.onLoadingFalse();
    if (filterPlanet === 'planets') {
      this.getItem(this.getPlanet);
    } else if (filterPlanet === 'characters') {
      this.getItem(this.getPerson);
    }
  };

  // Planet ***

  // hero ***
  heroItem = () => {
    const { heroes } = { ...this.state };
    const { activeElement } = this.state;
    const items = heroes.map((item, index) => {
      return (
        <li
          className={`draggable__item__li ${activeElement === index ? 'drag__active' : ''}`}
          key={item.id}
          onDragOver={() => this.onDragOver(index)}
          onClick={(e) => this.handleClick(e, index)}
        >
          <div
            className="drag"
            draggable
            onDragStart={(e) => this.onDragStart(e, index)}
          >
            <HeroItems
              item={item}
            />
          </div>
        </li>
      );
    });
    return (items);
  };

  onDragStart = (e, index) => {
    const { heroes } = this.state;
    this.draggedItem = heroes[index];
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
  };

  onDragOver = (index) => {
    const { heroes: heroes1 } = this.state;
    const draggedOverItem = heroes1[index];
    if (this.draggedItem === draggedOverItem) {
      return;
    }
    const heroes = heroes1.filter((item) => item !== this.draggedItem);
    heroes.splice(index, 0, this.draggedItem);
    this.setState({
      heroes,
      activeElement: index
    });
  };

  handleClick = (e, index) => {
    if (e.ctrlKey || e.metaKey) {
      const { activeElement } = this.state;
      if (activeElement === index) {
        this.setState({
          activeElement: null
        });
      }
      return;
    }
    if (e.altKey) {
      this.setState({
        activeElement: index
      });
    }
  };

  // hero ***
  render() {
    const {
      person,
      hasError,
      tableLabel,
      tableYear,
      loading,
      infoPlanet,
      filterPlanet,
      loadingHero,
      error
    } = this.state;
    const tableItems = this.createTable();
    const buttons = this.createButtons();

    const itemsHero = (loadingHero || !error) ? this.heroItem() : null;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return (
      <HomeView
        date={person}

        tableItems={tableItems}
        tableLabel={tableLabel}
        tableYear={tableYear}
        onDeleteItem={this.deleteTableItem}
        onSortTable={this.tableSortObject}
        onTableLabelChange={this.onLabelChange}
        onTableYearChange={this.onYearChange}
        onTableSubmit={this.onSubmit}

        planetButtons={buttons}
        planetLoading={loading}
        planetInfo={infoPlanet}
        planetFilter={filterPlanet}

        heroItems={itemsHero}
        heroError={error}
        loadingHero={loadingHero}
      />
    );
  }
}
