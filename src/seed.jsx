import { getFirestore, doc, writeBatch } from "firebase/firestore";


export function seedDatabase(firebase) {
  function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  const db = getFirestore(firebase);

  /**
   * Batch writing for optimized network calls.
   * This will ensure all writes are sent in a single request to Firestore.
   */
  const batch = writeBatch(db);

  const series = [
    {
      title: 'Tiger King',
      description:
        'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    },
    {
      title: 'Amanda Knox',
      description:
        'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'amanda-knox',
    },
    {
      title: 'Citizenfour',
      description:
        'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'citizenfour',
    },
    {
      title: 'Super Size Me',
      description:
        "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
      genre: 'documentaries',
      maturity: '12',
      slug: 'super-size-me',
    },
    {
      title: 'Man on Wire',
      description:
        "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'man-on-wire',
    },
    {
      title: 'The Office',
      description:
        'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
      genre: 'comedies',
      maturity: '15',
      slug: 'the-office',
    },
    {
      title: 'Arrested Development',
      description:
        'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
      genre: 'comedies',
      maturity: '15',
      slug: 'arrested-development',
    },
    {
      title: 'Curb Your Enthusiasm',
      description:
        'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
      genre: 'comedies',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
    },
    {
      title: 'Family Guy',
      description:
        'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    },
    {
      title: 'South Park',
      description:
        'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
      genre: 'comedies',
      maturity: '15',
      slug: 'south-park',
    },
    {
      title: 'Peppa Pig',
      description:
        'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with sa famille et ses amis.',
      genre: 'children',
      maturity: '0',
      slug: 'peppa-pig',
    },
    {
      title: 'Dora The Explorer',
      description:
        'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
      genre: 'children',
      maturity: '0',
      slug: 'dora-the-explorer',
    },
    {
      title: 'PAW Patrol',
      description:
        'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
      genre: 'children',
      maturity: '0',
      slug: 'paw-patrol',
    },
    {
      title: 'Arthur',
      description:
        'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
      genre: 'children',
      maturity: '0',
      slug: 'arthur',
    },
    {
      title: 'SpongeBob',
      description:
        'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean.',
      genre: 'children',
      maturity: '0',
      slug: 'spongebob',
    },
  ];

  const films = [
    {
      title: 'Making a Murderer',
      description:
        'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
    },
    {
      title: 'Long Shot',
      description:
        'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    },
    {
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder de Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    },
    {
      title: 'The Innocent Man',
      description:
        'Henry Lee Lucas was an American convicted serial killer dont les crimes se sont étendus de 1960 à 1983. Il a été condamné pour le meurtre de onze personnes et condamné à mort pour le meurtre de Debra Jackson.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
    },
    {
      title: 'The Staircase',
      description:
        "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    },
    {
      title: 'Good Will Hunting',
      description:
        'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    },
    {
      title: 'Forrest Gump',
      description:
        'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    },
    {
      title: 'Juno',
      description:
        "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    },
    {
      title: 'Midnight In Paris',
      description:
        'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    },
    {
      title: 'School of Rock',
      description:
        "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    },
    {
      title: 'The Prestige',
      description:
        'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
    {
      title: 'Fight Club',
      description:
        'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
      genre: 'drama',
      maturity: '15',
      slug: 'fight-club',
    },
    {
      title: 'Kings Speech',
      description:
        'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
      genre: 'drama',
      maturity: '15',
      slug: 'kings-speech',
    },
    {
      title: 'The Revenant',
      description:
        'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-revenant',
    },
    {
      title: 'The Social Network',
      description:
        'Mark Zuckerberg creates a social networking site, Facebook, with the help de son ami Eduardo Saverin. Mais bientôt, une série de mensonges déchire leur relation même si Facebook connecte les gens.',
      genre: 'drama',
      maturity: '12',
      slug: 'the-social-network',
    },
    {
      title: 'Shutter Island',
      description:
        'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    },
    {
      title: 'Gone Girl',
      description:
        'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-girl',
    },
    {
      title: 'Prisoners',
      description:
        "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
    },
    {
      title: 'Seven',
      description:
        'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
    },
    {
      title: 'Zodiac',
      description:
        'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiac',
    },
    {
      title: 'Hotel Transylvania',
      description:
        'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
      genre: 'children',
      maturity: '0',
      slug: 'hotel-transylvania',
    },
    {
      title: 'Despicable Me',
      description:
        'Gru, a criminal mastermind, adopts trois orphelins comme pions pour réaliser le plus grand vol de l’histoire. Sa vie prend un tournant inattendu lorsque les petites filles le voient comme leur père potentiel.',
      genre: 'children',
      maturity: '0',
      slug: 'despicable-me',
    },
    {
      title: 'Frozen',
      description:
        'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
      genre: 'children',
      maturity: '0',
      slug: 'frozen',
    },
    {
      title: 'Spirited Away',
      description:
        'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
      genre: 'children',
      maturity: '0',
      slug: 'spirited-away',
    },
    {
      title: 'Up',
      description:
        "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
      genre: 'children',
      maturity: '0',
      slug: 'up',
    },
    {
      title: 'Joker',
      description:
        'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
      genre: 'thriller',
      maturity: '15',
      slug: 'joker',
    },
    {
      title: 'A Quiet Place',
      description:
        'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
      genre: 'thriller',
      maturity: '15',
      slug: 'a-quiet-place',
    },
    {
      title: 'Black Swan',
      description:
        'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
      genre: 'thriller',
      maturity: '15',
      slug: 'black-swan',
    },
    {
      title: 'Nightcrawler',
      description:
        'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
      genre: 'thriller',
      maturity: '15',
      slug: 'nightcrawler',
    },
    {
      title: 'The Silence of The Lambs',
      description:
        'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
      genre: 'thriller',
      maturity: '15',
      slug: 'the-silence-of-the-lambs',
    },
    {
      title: 'A Star Is Born',
      description:
        'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
      genre: 'romance',
      maturity: '15',
      slug: 'a-star-is-born',
    },
    {
      title: 'Blue Valentine',
      description:
        'Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
      genre: 'romance',
      maturity: '15',
      slug: 'blue-valentine',
    },
    {
      title: 'La La Land',
      description:
        'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
      genre: 'romance',
      maturity: '15',
      slug: 'la-la-land',
    },
    {
      title: 'The Notebook',
      description:
        "Duke reads the story of Allie and Noah, deux amoureux qui ont été séparés par le destin, à Ms Hamilton, une vieille femme qui souffre de la maladie d'Alzheimer, chaque jour à partir de son carnet.",
      genre: 'romance',
      maturity: '15',
      slug: 'the-notebook',
    },
    {
      title: 'Titanic',
      description:
        'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love avec lui.',
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
    },
  ];

  /**
   * Add films to Firestore in batch.
   */
  films.forEach((film) => {
    const filmRef = doc(db, 'films', getUUID());
    batch.set(filmRef, film);
  });

  /**
   * Add series to Firestore in batch.
   */
  series.forEach((serie) => {
    const serieRef = doc(db, 'series', getUUID());
    batch.set(serieRef, serie);
  });

  /**
   * Commit all batched writes to Firestore.
   */
  console.log(`Added ${series.length} series to the batch.`);
  console.log(`Added ${films.length} films to the batch.`);

  console.log('THE SEEDING BEGINS NOW !!!');

  batch
    .commit()
    .then(() => {
      console.log('Database seeding completed successfully.');
    })
    .catch((error) => {
      console.error('Error seeding database:', error);
    })
    .finally(() => {
      console.log('End of the seeding');
    })
}