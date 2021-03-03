import { MyHeader } from './my-header';

export default {
    title: 'Tech/MyHeader',
};

const Template = (args) => MyHeader(args);

export const Primary = Template.bind({});
Primary.args = {
    title: "Welcome"
};





