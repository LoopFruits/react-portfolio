# Table Of Contents
  * [Getting-started](#getting-started)
  * [Features](#features)
  * [Installation Steps](#installation-steps)
  * [Code Snippet](#code-snippet)
  * [Technologies](#technologies)
  * [Socials](#socials)
  * [References](#references)



## Getting Started 
Welcome to the portfolio of Kenneth Jordan, I'm interested in furthering my developmental knowledge in tech. I have a passion for sports and gaming. I'm a competitive person who loves to learn.  I'm open to  Frontend, Backend, or Full Stack positions.

## Features
* Custom Font CSS
* Contact form integrated with Getform.io
* Fully Responsive on desktop and mobile 

## Code Snippet

```const NavBar = () => {

  const [nav,setNav]= useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'skills'
    },
    {
      id: 4,
      link: 'portfolio'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue fixed">
      <div>
          <h1 className="text-5xl font-signature ml-2">Kenneth</h1>
      </div>

      <ul className="hidden md:flex">
        {/* Mapping over our id's and links */}
        {links.map(({id, link}) => (
          <li 
            key ={id} 
            className="px-4 cursor-pointer capitalize font-medium text-white hover:text-sky-400 hover:scale-105 duration-200">

            <Link 
              to={link} 
              smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

    <div onClick ={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
      {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
    </div>
```    

## Installation Steps

1. Clone the repository

```bash
git clone https://github.com/LoopFruits/react-portfolio.git
```

2. Change the working directory

```bash
cd react-portfolio
```

3. Install dependencies

```bash
npm install
```
4. Running the application
```bash
npm start
```


## Technologies 
   - React.JSX
   - TailwindCSS
   - React-icons
   - React-scroll
   - Getform.io
   


   
## Socials

   - Kenneththedev@gmail.com
   - https://twitter.com/Kenneththedev
   - https://medium.com/@Kenneththedev
   - https://github.com/LoopFruits
   
<br>
<details><summary>show references</summary>

<p>
## References

* https://bootcamp.uxdesign.cc/your-portfolios-are-fucking-boring-293b97ac45c1
* https://tailwindcss.com/
* https://github.com/hjkmines/BugView-MERN-Project

</details>
