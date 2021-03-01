import { Menu } from './Menu';

export default {
    title: 'Tech/Menu',
    argTypes: {
        backgroundColor: {control: 'color'},
        color: {control: 'color'}
    }
};

const Template = (args) => Menu(args);

export const Horizontal = Template.bind({});
Horizontal.args = {
    alignment: "horizontal",
    menuItem0: "menuItem0",
    menuItem1: "menuItem1",
    menuItem2: "menuItem2",
    menuItem3: "menuItem3"
};

export const Vertical = Template.bind({});
Vertical.args = {
    alignment: "vertical",
    menuItem0: "menuItem0",
    menuItem1: "menuItem1",
    menuItem2: "menuItem2",
    menuItem3: "menuItem3"
};



