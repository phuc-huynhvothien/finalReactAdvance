import React from 'react'
import PaginationToolbar from './PaginationToolbar'
import { mount, shallow } from 'enzyme';
import { IProduct } from "../../models/IProduct";
import { productItem } from '../../utils/gql-mock';
import Adapter from 'enzyme-adapter-react-15';
describe("ProductList", () => {
  const paginationHandler = jest.fn().mockImplementation((x: IProduct) => { return x });
  const items: IProduct[] = [productItem];
  let component;

  test("Button should click", () => {
    const page: number = 1;
    const wrapper = mount(<PaginationToolbar pageActive={page} paginationHandler={paginationHandler} />)
    wrapper.find('button').at(1).simulate('click');
    expect(paginationHandler).toHaveBeenCalledTimes(1);
  });

});