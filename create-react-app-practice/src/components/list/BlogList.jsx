import React from 'react'
import blogs from './data'

export default function BlogList() {
    return (
        <div className='container'>
            <div className="row">

                {
                    blogs.map(item => {
                        return <div key={item.id} className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={item.img} alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <a href={item.url} className="btn btn-primary">Go Unsplah</a>
                                </div>
                            </div>
                        </div>
                    })
                }


                {/* 

                <div className="col-md-4">two</div>
                <div className="col-md-4">three</div> */}
            </div>
        </div>
    )
}
