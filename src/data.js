const data = [
  {
    book_id: 1,
    title: 'The Adventures of Sherlock Holmes',
    price: 15000,
    stock_quantity: 20,
    available_until: '2025-12-31',
    book_image: 'https://placehold.co/200',
    created_at: '2024-01-01',
    summary: 'Sherlock Holmes solves cases with his unique abilities and brilliant reasoning.',
    category: '장편소설',
    publisher: 'Penguin Classics',
    author: 'Arthur Conan Doyle',
  },
  {
    book_id: 2,
    title: 'The Great Gatsby',
    price: 12000,
    stock_quantity: 15,
    available_until: '2025-06-15',
    book_image: 'https://placehold.co/200',
    created_at: '2024-02-15',
    summary: 'A tragic story about love, wealth, and the American Dream.',
    category: '장편소설',
    publisher: 'Scribner',
    author: 'F. Scott Fitzgerald',
  },
  {
    book_id: 3,
    title: '1984',
    price: 18000,
    stock_quantity: 10,
    available_until: '2025-04-20',
    book_image: 'https://placehold.co/200',
    created_at: '2024-03-10',
    summary: 'A dystopian novel that explores the dangers of totalitarianism.',
    category: '장편소설',
    publisher: 'Harvill Secker',
    author: 'George Orwell',
  },
  {
    book_id: 4,
    title: 'To Kill a Mockingbird',
    price: 14000,
    stock_quantity: 8,
    available_until: '2025-07-01',
    book_image: 'https://placehold.co/200',
    created_at: '2024-01-30',
    summary: 'A story of racial injustice and childhood innocence in the Deep South.',
    category: '장편소설',
    publisher: 'J.B. Lippincott & Co.',
    author: 'Harper Lee',
  },
  {
    book_id: 5,
    title: 'The Catcher in the Rye',
    price: 11000,
    stock_quantity: 25,
    available_until: '2025-11-15',
    book_image: 'https://placehold.co/200',
    created_at: '2024-02-01',
    summary: 'A rebellious teenager’s view of society and the world around him.',
    category: '중편소설',
    publisher: 'Little, Brown and Company',
    author: 'J.D. Salinger',
  },
  {
    book_id: 6,
    title: 'Pride and Prejudice',
    price: 13000,
    stock_quantity: 35,
    available_until: '2025-05-12',
    book_image: 'https://placehold.co/200',
    created_at: '2024-02-05',
    summary: 'A romantic novel exploring the themes of love and social standing.',
    category: '장편소설',
    publisher: 'T. Egerton',
    author: 'Jane Austen',
  },
  {
    book_id: 7,
    title: 'Moby-Dick',
    price: 17000,
    stock_quantity: 5,
    available_until: '2025-09-10',
    book_image: 'https://placehold.co/200',
    created_at: '2024-01-17',
    summary: 'The obsessive quest of Captain Ahab to find and kill the white whale.',
    category: '중편소설',
    publisher: 'Harper & Brothers',
    author: 'Herman Melville',
  },
  {
    book_id: 8,
    title: 'War and Peace',
    price: 25000,
    stock_quantity: 18,
    available_until: '2025-10-22',
    book_image: 'https://placehold.co/200',
    created_at: '2024-03-05',
    summary: 'A historical novel that depicts the French invasion of Russia.',
    category: '단편소설',
    publisher: 'The Russian Messenger',
    author: 'Leo Tolstoy',
  },
  {
    book_id: 9,
    title: 'The Brothers Karamazov',
    price: 20000,
    stock_quantity: 12,
    available_until: '2025-12-01',
    book_image: 'https://placehold.co/200',
    created_at: '2024-04-10',
    summary: 'A philosophical novel dealing with morality, free will, and faith.',
    category: '중편소설',
    publisher: 'The Russian Messenger',
    author: 'Fyodor Dostoevsky',
  },
  {
    book_id: 10,
    title: 'Crime and Punishment',
    price: 16000,
    stock_quantity: 50,
    available_until: '2025-06-30',
    book_image: 'https://placehold.co/200',
    created_at: '2024-02-12',
    summary: 'A young man commits a crime and grapples with his conscience.',
    category: '중편소설',
    publisher: 'The Russian Messenger',
    author: 'Fyodor Dostoevsky',
  },
  {
    book_id: 11,
    title: 'The Hobbit',
    price: 13000,
    stock_quantity: 40,
    available_until: '2025-07-20',
    book_image: 'https://placehold.co/200',
    created_at: '2024-02-18',
    summary: 'The journey of Bilbo Baggins through Middle-Earth to defeat a dragon.',
    category: '단편소설',
    publisher: 'George Allen & Unwin',
    author: 'J.R.R. Tolkien',
  },
  {
    book_id: 12,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    price: 29000,
    stock_quantity: 18,
    available_until: '2025-08-30',
    book_image: 'https://placehold.co/200',
    created_at: '2024-01-10',
    summary: 'The first part of the epic quest to destroy the One Ring.',
    category: '장편소설',
    publisher: 'George Allen & Unwin',
    author: 'J.R.R. Tolkien',
  },
  {
    book_id: 13,
    title: 'The Fellowship of the Ring',
    price: 24000,
    stock_quantity: 30,
    available_until: '2025-04-10',
    book_image: 'https://placehold.co/200',
    created_at: '2024-03-01',
    summary: 'The journey to destroy the One Ring begins in this epic fantasy novel.',
    category: '단편소설',
    publisher: 'George Allen & Unwin',
    author: 'J.R.R. Tolkien',
  },
  {
    book_id: 14,
    title: 'The Wind in the Willows',
    price: 30000,
    stock_quantity: 10,
    available_until: '2025-03-22',
    book_image: 'https://placehold.co/200',
    created_at: '2024-05-01',
    summary: 'The adventures of a mole, a rat, and a badger in the English countryside.',
    category: '장편소설',
    publisher: 'Methuen & Co.',
    author: 'Kenneth Grahame',
  },
  {
    book_id: 15,
    title: "Alice's Adventures in Wonderland",
    price: 21000,
    stock_quantity: 20,
    available_until: '2025-06-18',
    book_image: 'https://placehold.co/200',
    created_at: '2024-04-25',
    summary: 'A young girl’s fantastical journey through a strange and whimsical world.',
    category: '중편소설',
    publisher: 'Macmillan',
    author: 'Lewis Carroll',
  },
  {
    book_id: 16,
    title: 'The Tale of Two Cities',
    price: 16000,
    stock_quantity: 10,
    available_until: '2025-12-05',
    book_image: 'https://placehold.co/200',
    created_at: '2024-06-18',
    summary: 'A story set during the French Revolution about sacrifice and redemption.',
    category: '단편소설',
    publisher: 'Chapman & Hall',
    author: 'Charles Dickens',
  },
  {
    book_id: 17,
    title: 'Brave New World',
    price: 19000,
    stock_quantity: 30,
    available_until: '2025-09-12',
    book_image: 'https://placehold.co/200',
    created_at: '2024-03-20',
    summary: 'A dystopian novel that presents a terrifying vision of the future.',
    category: '장편소설',
    publisher: 'Chatto & Windus',
    author: 'Aldous Huxley',
  },
  {
    book_id: 18,
    title: 'The Picture of Dorian Gray',
    price: 18000,
    stock_quantity: 25,
    available_until: '2025-11-10',
    book_image: 'https://placehold.co/200',
    created_at: '2024-07-15',
    summary: 'A man who remains young while a portrait ages, revealing his soul’s corruption.',
    category: '단편소설',
    publisher: 'Ward, Lock & Co.',
    author: 'Oscar Wilde',
  },
  {
    book_id: 19,
    title: 'Dracula',
    price: 20000,
    stock_quantity: 12,
    available_until: '2025-03-22',
    book_image: 'https://placehold.co/200',
    created_at: '2024-03-02',
    summary: 'A gothic horror novel about the infamous vampire Count Dracula.',
    category: '중편소설',
    publisher: 'Archibald Constable and Company',
    author: 'Bram Stoker',
  },
];

export default data;
