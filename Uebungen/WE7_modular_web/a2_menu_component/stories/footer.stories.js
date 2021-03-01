import { Footer } from './footer';

export default {
    title: 'Tech/Footer',
};

const Template = (args) => Footer(args);

export const Primary = Template.bind({});
Primary.args = {
    footerItem0: "About",
    footerItem1: "Our Team",
    footerItem2: "References",
    footerItem3: "Further information",
    footerLink0: "footerLink0",
    footerLink1: "footerLink1",
    footerLink2: "footerLink2",
    footerLink3: "footerLink3",
    author: "Max Mustermann",
    date: "März 2021"
};





