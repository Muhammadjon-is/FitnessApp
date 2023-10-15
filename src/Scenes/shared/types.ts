export enum  SelectedPage {
    Home = "home",
    Benefits = "benefits",
    Ourclasses = "ourClasses",
    ContactUs = "contactus",
  }

  export interface BenefitType {
    icon:JSX.Element;
    title:string;
    desc:string
  }