import { services } from '../../../constants/Services'
import Service from './Service/Service'

const ServiceList: React.FC = () => {
  return (
    <div id='services'>
      {services.map((service, index) => (
        <Service key={index} index={index} {...service} />
      ))}
    </div>
  )
}

export default ServiceList
