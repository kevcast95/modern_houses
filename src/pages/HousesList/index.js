import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import './HousesList.scss'

function HousesList({housesList}) {
  const navigate = useNavigate()
  const abc = Object.keys(housesList).sort()
  const houseCard = (alpha) => {
    return (
      housesList[alpha]?.map((house, idx) => {
        return (
          <div key={idx} className='houses-list_house-card'>
            <img 
              src={house.url} alt={`${house.name}`} 
            />
            <div className='house-card_info'>
              <span>
                No. {house.number}, {house.name_translations.es}, {house.building_start_date} - {house.building_end_date}
              </span>
              <p>{house.address}</p>
            </div>
            <button 
              className='house-card_btn'
              onClick={()=> navigate(`/${house.id}/house_detail`)}
            >
              ver
            </button>
          </div>
        )
      })
    )
    
  }
  
  return (
    <section className='houses-list'>
      <div className='houses-list_houses-contianier'>
        {
          abc?.map((alphaKey, index) => {
            return (
              <div className='houses-list_divider' key={index}>
                <h2>{alphaKey}</h2>
                {houseCard(alphaKey)}
                
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

HousesList.propTypes = {
  housesList: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

function mapStateToProps({ house }) {
  return {
    housesList: house.housesList,
    isLoading: house.loading,
  }
}

export default connect(mapStateToProps)(HousesList)
