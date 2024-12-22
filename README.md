# REST Countries API app
Applications with the ability to search and view country information based on REST API countries.

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/) - Dev server


### What I learned

#### New react libraries
In this project, I tried two new libraries. One is called **react aria** which helped me to make components like region select menu more accessible. I often find myself asking how to make a component better in this regard, but sometimes it's just hard to remember all the details for each component which is time consuming. The react aria library has helped a lot with this. Then I tried the **react icons** library, which was also a nice bonus in development.


#### Index signatures in TS
I also learned about **index signatures** in typescript. As I understand it, this is used when you have a number of keys that look slightly different in similar objects, hence can't be precisely predicted, but have the same value. It can look something like this:
```ts
export type CountryExtended = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      }
    }
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  flags: Flags,
  borders: string[],
  // this is index signature
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    }
  },
  languages: {
    [key: string]: string;
  },
  tld: string[],
}
```


### Useful resources

- [React Aria Docs](https://react-spectrum.adobe.com/react-aria/index.html)
