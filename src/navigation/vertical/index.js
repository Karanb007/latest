import {useState} from 'react'
// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'

import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
 
  let role = "0"
  // const isAuthorized = false
  // const role = JSON.parse(localStorage.getItem('role'));
  // console.log(role)
  if(role == "1"){
    return[
      // {
      //   title: 'Dashboard',
      //   icon: HomeOutline,
      //   path: '/'
      // },
      // {
      //   title: 'Account Settings',
      //   icon: AccountCogOutline,
      //   path: '/account-settings'
      // },
      // {
      //   sectionTitle: 'Pages'
      // },
      // {
      //   title: 'Login',
      //   icon: Login,
      //   path: '/pages/login',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Register',
      //   icon: AccountPlusOutline,
      //   path: '/pages/register',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Error',
      //   icon: AlertCircleOutline,
      //   path: '/pages/error',
      //   openInNewTab: true
      // },
  
      // {
      //   title: 'App User',
      //   icon: Table,
      //   path: '/app-user'
      // },
      {
        title: 'vendor',
        icon: Table,
        path: '/vendor'
      },
      // {
      //   title: 'Manage Users',
      //   icon: Table,
      //   path: '/manageUsers'
      // },
      {
        title: 'Customer',
        icon: Table,
        path: '/customer'
      }
      // {
      //   sectionTitle: 'User Interface'
      // },
      // {
      //   title: 'Typography',
      //   icon: FormatLetterCase,
      //   path: '/typography'
      // },
      // {
      //   title: 'Icons',
      //   path: '/icons',
      //   icon: GoogleCirclesExtended
      // },
      // {
      //   title: 'Cards',
      //   icon: CreditCardOutline,
      //   path: '/cards'
      // },
      // {
      //   title: 'Tables',
      //   icon: Table,
      //   path: '/tables'
      // },
     
      // {
      //   icon: CubeOutline,
      //   title: 'Form Layouts',
      //   path: '/form-layouts'
      // }
    ]
  }else if(role == "2"){
    return[
      // {
      //   title: 'Dashboard',
      //   icon: HomeOutline,
      //   path: '/'
      // },
      // {
      //   title: 'Account Settings',
      //   icon: AccountCogOutline,
      //   path: '/account-settings'
      // },
      // {
      //   sectionTitle: 'Pages'
      // },
      // {
      //   title: 'Login',
      //   icon: Login,
      //   path: '/pages/login',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Register',
      //   icon: AccountPlusOutline,
      //   path: '/pages/register',
      //   openInNewTab: true
      // },
    
      // {
      //   title: 'App User',
      //   icon: Table,
      //   path: '/app-user'
      // },
      // {
      //   title: 'vendor',
      //   icon: Table,
      //   path: '/vendor'
      // },
      // {
      //   title: 'Manage Users',
      //   icon: Table,
      //   path: '/manageUsers'
      // },
      {
        title: 'Customer',
        icon: Table,
        path: '/customer-form'
      }
      
     
     
    ]
  }else{

    return[
      
      {
        title: 'vendors',
        icon: Table,
        path: '/admin/vendors'
      },
      {
        title: 'customers',
        icon: Table,
        path: '/admin/customers'
      },
    ]
  }
  
}

export default navigation
