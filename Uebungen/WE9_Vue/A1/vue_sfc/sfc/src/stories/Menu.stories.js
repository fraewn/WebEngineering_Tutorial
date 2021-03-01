import Menu from './Menu.vue';

export default {
    title: 'Tech/Menu',
    component: Menu
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Menu },
    template: '<Menu @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    item1: "Friendship",
    item2: "Culture",
    item3: "Carriere",
    item4: "Life Goals",
    inline: true
};