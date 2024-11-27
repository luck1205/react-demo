import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from '../../App';

const   router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/content',
                element:'我是二级嵌套路由'
            }
        ]
    },
    {
        path:'/article',
        element:<div>我是登录页</div>
    },
    {
        path:'*',
        element:<div>this is NOt Found</div>
    }
])

export default router