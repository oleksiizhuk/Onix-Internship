export default class SwapiServise {

    _apiBase = process.env.REACT_APP_API_BASE;

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`);
        }
        const body = await res.json();
        return body
    };

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }


    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    _extractId(item) {
        const idRegExp = /\/(\d*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map((item) => {
            return this._transformPerson(item)
        });
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            ell1: planet.population,
            ell2: planet.rotation_period,
            ell3: planet.diameter
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birth: person.birth_year,
            eye: person.eye_color
        }
    }
}

