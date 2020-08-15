import React from 'react';
import { Pagination } from 'react-bootstrap'
import {Button} from './PaginationToolbar.styled'
interface IProps { pageActive?: number, paginationHandler?: (x: number) => void }

const PaginationToolbar: React.FC<IProps> = ({ pageActive = 1, paginationHandler }) => {
    const pages = [1, 2, 3, 4, 5]
    return (
        <Pagination>
            {pageActive > 1 &&
                <>
                    <Pagination.First onClick={() => paginationHandler(pages[0])} />
                    <Pagination.Prev onClick={() => paginationHandler(pageActive > 1 ? pageActive - 1 : 1)} />
                </>
            }
            {pages.map((item, index) => (<Pagination.Item key={item} active={item === pageActive} onClick={() => paginationHandler(item)}>
               <Button>{item}</Button>
            </Pagination.Item>))}
            {pageActive < 5 &&
                <>
                    <Pagination.Next onClick={() => paginationHandler(pageActive + 1)} />
                    <Pagination.Last onClick={() => paginationHandler(pages[4])} />
                </>
            }
        </Pagination>
    )
}

export default PaginationToolbar