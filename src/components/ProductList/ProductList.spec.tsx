import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from 'enzyme';
import { ProductList } from "./index";
import { IProduct } from "../../models/IProduct";
import { productItem } from '../../utils/gql-mock';

describe("ProductList", () => {
    const addToCart = jest.fn().mockImplementation((x: IProduct) => { return x });
    const items: IProduct[] = [productItem];

    test("should render", () => {
        const component = renderer.create(<ProductList items={items} ></ProductList>)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // test("Button should click", () => {
    //     const wrapper = mount(<ProductList items={items} addToCart={addToCart} />)
    //     wrapper.find('button').at(1).simulate('click');
    //     expect(addToCart).toHaveBeenCalledTimes(1);
    // });

    // test("#addToCart should return item", () => {
    //     expect(addToCart(productItem)).toEqual(productItem)
    // });
});
