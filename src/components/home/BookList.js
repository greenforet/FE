import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BookItem from './BookItem';
import Pagination from './Pagination';

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [booksPerPage, setBooksPerPage] = useState(15); // 페이지당 최대 데이터 개수

  const books = useSelector((state) => state.books);

  // 현재 페이지에 표시될 데이터 목록을 보여주기 위한 첫 번째 index, 마지막 index 구하기
  const firstBooksIndex = (currentPage - 1) * booksPerPage; // 첫 번째 index
  const lastBooksIndex = firstBooksIndex + booksPerPage; // 두 번째 index
  const currentBooks = books.slice(firstBooksIndex, lastBooksIndex); // 페이지에 해당하는 데이터만 가져오기

  return (
    <section>
      <BookListTitle>오늘의 책 [Today's Book]</BookListTitle>
      <Pagination booksPerPage={booksPerPage} setCurrentPage={setCurrentPage} />
      <CardList>
        {currentBooks.map((book) => (
          <BookItem key={book.book_id} book={book} />
        ))}
      </CardList>
    </section>
  );
};

const BookListTitle = styled.h2`
  color: #656e7f;
  font-size: 32px;
  text-align: center;
  letter-spacing: 2px;
  margin: 300px auto 50px;
`;

const CardList = styled.ul`
  width: 1204px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
`;

export default BookList;