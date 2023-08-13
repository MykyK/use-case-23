import { faker } from '@faker-js/faker';

const listOfAgeCertification = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'U', 'U/A', 'A', 'S', 'AL', '6', '9', '12', '12A', '15', '18', '18R', 'R18', 'R21', 'M', 'MA15+', 'R16', 'R18+', 'X18', 'T', 'E', 'E10+', 'EC', 'C', 'CA', 'GP', 'M/PG', 'TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA']
const listOfRoles = ['Director', 'Producer', 'Screenwriter', 'Actor', 'Actress', 'Cinematographer', 'Film Editor', 'Production Designer', 'Costume Designer', 'Music Composer']

const getRandomItemFromList = (list) => list[faker.number.int({
  min: 0,
  max: list.length - 1
})]

const createTitleObjectFactory = (id) => ({
  id: id,
  title: faker.lorem.word(),
  description: faker.lorem.words(5),
  release_year: faker.date.past({ years: 30 }).getFullYear(),
  age_certification: getRandomItemFromList(listOfAgeCertification),
  runtime: faker.number.int({
    min: 60,
    max: 180
  }),
  genres: faker.lorem.word(),
  production_country: faker.location.countryCode('alpha-3'),
  seasons: faker.number.int({
    min: 0,
    max: 15
  }) || null
})

const createCreditObjectFactory = (id) => ({
  id: id,
  title_id: faker.number.int({min: 1, max: 100 }),
  real_name: faker.person.fullName(),
  character_name: faker.person.firstName(),
  role: getRandomItemFromList(listOfRoles),
})


export const GenerateFakeDataHelper = () => {
  const titles = []
  const credits = []

  for(let i = 0; i < 100; i++) {
    titles.push(createTitleObjectFactory(i + 1))
  }

  for(let i = 0; i < 150; i++) {
    credits.push(createCreditObjectFactory(i + 1))
  }
 
  return ({
    titles: titles,
    credits: credits
  })
}

export const getCsvTitlesData = (titles) => [
  ["ID", "Title", "Description", "Release Year", "Age Certification", "Runtime", "Genres", "Production Country", "Seasons"],
  ...titles.map(({ 
    id,
    title,
    description,
    release_year,
    age_certification,
    runtime,
    genres,
    production_country,
    seasons,
   }) => [
    id,
    title,
    description,
    release_year,
    age_certification,
    runtime,
    genres,
    production_country,
    seasons,
  ]),
];

export const getCsvCreditsData = (credits) => [
  ["ID", "Title ID", "Real Name", "Character Name", "Role"],
  ...credits.map(({ 
    id,
    title_id,
    real_name,
    character_name,
    role,
   }) => [
    id,
    title_id,
    real_name,
    character_name,
    role,
  ]),
];