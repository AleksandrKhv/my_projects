import React from 'react'
import st from './Projects.module.css'
import stContainer from '../common/styles/Container.module.css'
import Project from './project/Project'
import Title from '../Title/Title'
import imgCoffee from './../../assets/img/coffee_shop.png'
import imgTodoList from './../../assets/img/todolist.png'
import imgBlog from './../../assets/img/blog.png'
import imgDashboard from './../../assets/img/dashboard.png'
import imgCountryFlags from './../../assets/img/countryflags.jpg'

const Projects = () => {

  const coffeeShop = {
    backgroundImage: 'url(' + imgCoffee + ')',
  }
  const todoList = {
    backgroundImage: 'url(' + imgTodoList + ')',
  }
  const blogImg = {
    backgroundImage: 'url(' + imgBlog + ')',
  }

  const dashboardImg = {
    backgroundImage: 'url(' + imgDashboard + ')',
  }

  const countryFlagsImg = {
    backgroundImage: 'url(' + imgCountryFlags + ')',
  }

  return (
    <div className={st.wrapper_projects} id={'projects'}>
      <div className={st.projectContainer + ' ' + stContainer.container}>
        <Title title={'Projects of Aleksandr Khvashchevski'}/>
        <div className={st.projects}>
          <Project style={coffeeShop}
                   title={'Coffee Shop'}
                   text={'used React, React Icons, HTML, CSS, only layout, no functionality'}
                   web={'https://AleksandrKhv.github.io/coffee_web'}/>
          <Project style={todoList}
                   title={'TodoList'}
                   text={'used React JS (Hooks), HTML, CSS'}
                   web={'https://aleksandrkhv.github.io/simple_todo_list'}/>
          <Project style={blogImg}
                   title={'React Blog (MongoDB, Express, React, NodeJS)'}
                   text={'1. I develop my backend\n' +
                     '2. I do authorization and registration backend + frontend\n' +
                     '3. Working with a database (MongoDB)\n' +
                     '4. I develop a full stack project\n' +
                     '5. I upload files to the server\n' +
                     '6. I connect authentication using JWT\n' +
                     '7. Interaction of the frontend with the backend'}
                   web={'https://blog-react-frontend-ten.vercel.app/'}/>
          <Project style={dashboardImg}
                   title={'Dashboard'}
                   text={'React JS, Redux Toolkit'}
                   web={'https://dashboard-app-redux-mauve.vercel.app/'}/>
          <Project style={countryFlagsImg}
                   title={'Country Flags'}
                   text={'React JS, Redux Toolkit'}
                   web={'https://rest-countries-api-with-color-theme-switcher-psi-seven.vercel.app/'}/>
        </div>
        <Title title={'Thank you for your attention. All the best to you!'}/>
      </div>
    </div>
  )
}

export default Projects