import React from 'react'
import PaginationToolbar from './PaginationToolbar'
import { mount, shallow } from 'enzyme';
import { Adapter } from 'enzyme-adapter-react-16';
describe("ProductList", () => {
  const paginationHandler = jest.fn().mockImplementation((x: number) => { return x });
  const page:number = 1;
  test("Button should click", () => {
      const wrapper = mount(<PaginationToolbar pageActive={page} paginationHandler={paginationHandler} />)
      wrapper.find('button').at(1).simulate('click');
      expect(paginationHandler).toHaveBeenCalledTimes(1);
  });

   
});