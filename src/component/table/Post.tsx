import React from "react"
import { Link } from "react-router-dom";
import "../../style/table.css"
import { IPost } from './../../models/post';

type IPostTablePropType = {
    posts?: IPost[]
}


function PostTable({ posts = [] }: IPostTablePropType) {
    return ( 
        <>
           <div className="container">
            
            <ul className="responsive-table">
                <li className="table-header">
                <div className="col col-1">Номер</div>
                <div className="col col-2">Заголовок</div>
                <div className="col col-3">Ссылка</div>
                <div className="col col-4">Реакции</div>
                </li>
                {
                    posts.length?
                    posts.map((item, i) => {
                        return(
                            <li className="table-row">
                                <div className="col col-1" data-label="Job Id">
                                    {
                                        ++i
                                    }
                                </div>
                                <div className="col col-2" data-label="Customer Name">
                                    {
                                        item.title
                                    }
                                </div>
                                <div className="col col-3" data-label="Amount">
                                    {
                                        <Link to={"/post/" + item.id}>
                                            Подробнее...
                                        </Link>
                                    }
                                </div>
                                <div className="col col-4" data-label="Payment Status">
                                    {
                                        item.reactions
                                    }
                                </div>
                            </li>
                        )
                    })
                    : 
                    <p style={{textAlign: "center"}}> Загрузка... </p>
                }
                
            </ul>
            </div>
        </>
     );
}

export default PostTable;