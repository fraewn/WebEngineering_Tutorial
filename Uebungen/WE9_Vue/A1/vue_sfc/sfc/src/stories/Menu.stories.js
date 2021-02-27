import Menu from './Menu.vue';

export default {
    title: 'Tech/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Menu },
    template: '<Menu @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    item1: "hello",
    item2: "hello",
    item3: "hello",
    item4: "hello",
    inline: true
};