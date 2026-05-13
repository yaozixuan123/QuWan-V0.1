export enum Screen {
  Splash = 'splash',
  Identity = 'identity',
  Home = 'home',
  Assessment = 'assessment',
  Scheme = 'scheme',
  Progress = 'progress',
  Scan = 'scan',
  Profile = 'profile',
}

export interface CaseStudy {
  id: string;
  title: string;
  technique: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

export interface Restorer {
  id: string;
  name: string;
  id_title: string;
  portrait: string;
  rating: number;
  repairs: string;
}

export interface Scheme {
  id: string;
  name: string;
  type: string;
  philosophy: string;
  duration: string;
  price: string;
  image: string;
}
