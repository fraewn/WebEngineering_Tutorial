import Wordanalyser from './Wordanalyser';

export default {
    title: 'Tech/Wordanalyser',
    component: Wordanalyser
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Wordanalyser },
    template: '<wordanalyser @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    msg: "Welcome to Wordanalyser",
    input: "Enter here sentences you want to have analysed..."
};
