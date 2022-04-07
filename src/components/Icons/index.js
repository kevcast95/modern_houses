import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer.svg'
import { ReactComponent as Menu } from '../../assets/icons/ham-menu.svg'
import { ReactComponent as Loading } from '../../assets/icons/loading.svg'

function Icon(props) {
    const { item, width, height, fill, stroke, className } = props
    const iconsList = {
        location: (
            <Location
              fill={fill}
              stroke={stroke}
              height={height}
              width={width}
              className={className}
            />
        ),
        layer: (
            <Layer
              fill={fill}
              stroke={stroke}
              height={height}
              width={width}
              className={className}
            />
        ),
        menu: (
            <Menu
              fill={fill}
              stroke={stroke}
              height={height}
              width={width}
              className={className}
            />
        ),
        Loading: (
            <Loading
              fill={fill}
              stroke={stroke}
              height={height}
              width={width}
              className={className}
            />
        ),
        
    }
    return iconsList?.[item] ?? null
}
Icon.propTypes = {
  item: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
}

Icon.defaultProps = {
  width: '16px',
  height: '16px',
  fill: '#FFF',
  stroke: '#FFF',
  className: '',
}
export default Icon