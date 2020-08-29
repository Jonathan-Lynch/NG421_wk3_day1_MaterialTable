import {IPhilosophers} from '../interfaces/iphilosophers';

const PHILOSOPHERS_OF_HISTORY: IPhilosophers[] = [
    {
        name: 'Socrates',
        areaLived: 'Aethens',
        ageOfDeath: 71,
        areTheyChristian: false,
        sumOfBeliefs: ['talking about Truths', 'mostly Comes From Plato'],
        birthDate: new Date('1/1/470')
    },
    {
        name: 'Plato',
        areaLived: 'Aethens',
        ageOfDeath: 81,
        areTheyChristian: false,
        sumOfBeliefs: ['Platos Cave'],
        birthDate: new Date('1/1/428')
    },
    {
        name: 'Emmanuel Kant',
        areaLived: 'Konigsberg',
        ageOfDeath: 80,
        areTheyChristian: true,
        sumOfBeliefs: ['Empiricism & Rationalism', 'perspective affects reason'],
        birthDate: new Date('4/22/1724')
    },
    {
        name: 'Augustine of Hippo',
        areaLived: 'Hippo',
        ageOfDeath: 75,
        areTheyChristian: true,
        sumOfBeliefs: ['christianized Plato'],
        birthDate: new Date('11/13/354')
    },
    {
        name: 'Thomas Aquinas',
        areaLived: 'Italy',
        ageOfDeath: 49,
        areTheyChristian: true,
        sumOfBeliefs: ['christianized Aristotle'],
        birthDate: new Date('1/1/1225')
    }
];

export {PHILOSOPHERS_OF_HISTORY};
