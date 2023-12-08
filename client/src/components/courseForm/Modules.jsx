import React from 'react'

const Modules = ({module}) => {
    return (
        <div className='module-list'>
            <div className="module-top">
                {module}
            </div>

            <div className="lessons">
                <button className='lesson-btn' type='button'>Add Lessons</button>
            </div>
        </div>
    )
}

export default Modules