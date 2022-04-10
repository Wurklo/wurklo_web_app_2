import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

function SearchPaginate() {
    return (
        <>
            <Pagination
                size='sm'
            >
                <PaginationItem>
                    <PaginationLink
                        first
                        href="#"
                        className='border-0 m-0 shadowed'
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        previous
                        className='border-0 m-0 shadowed'
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className='border-0 m-0 shadowed'>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className='border-0 m-0 shadowed'>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className='border-0 m-0 shadowed'>
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className='border-0 m-0 shadowed'>
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className='border-0 m-0 shadowed'>
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        className='border-0 m-0 shadowed'
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        last
                        className='searchPaginate__link border-0 m-0 shadowed'
                    />
                </PaginationItem>
            </Pagination>
        </>
    )
}

export default SearchPaginate