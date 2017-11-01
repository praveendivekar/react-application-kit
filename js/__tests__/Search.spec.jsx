import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renders correctly', () => {
    const component = shallow(<Search shows={preload.shows}/>)
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search shows={preload.shows}/>);
    expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

xtest('Search should render correct amount of shows based on search term', () => {
    const searchWord = 'black';
    const component = shallow(<Search shows={preload.shows}/>);
    component.find('input').simulate('change', {target:{value:searchWord}});
    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase() >= 0 )
    ).length;
    expect(component.find(showCard).length).toEqual(showCount.length);
});
