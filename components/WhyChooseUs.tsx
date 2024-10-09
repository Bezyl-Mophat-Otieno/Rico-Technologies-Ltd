import { CheckCircle, CreditCard, Clock, Truck, Shield } from 'lucide-react'

const reasons = [
  { text: "Tailored solutions for students and professionals", icon: CheckCircle },
  { text: "Competitive prices in Kenyan Shillings", icon: CreditCard },
  { text: "24/7 Expert advice and support", icon: Clock },
  { text: "Wide range of high-quality products", icon: Shield },
  { text: "Fast and reliable delivery across Kenya", icon: Truck }
]

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-tech-pattern">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Why Choose Rico Technologies?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center bg-secondary/50 p-4 rounded-lg">
                  <reason.icon className="text-primary mr-4 flex-shrink-0" />
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Commitment</h3>
            <p className="mb-4">
              At Rico Technologies, we're dedicated to providing top-notch technology solutions tailored to the needs of university students and software engineers. Our team of experts is always ready to assist you in finding the perfect tech setup for your studies or professional work.
            </p>
            <p>
              We understand the importance of reliable and affordable technology in today's digital world. That's why we offer competitive prices in Kenyan Shillings and ensure that all our products meet the highest quality standards. With our pay-on-delivery option and 24/7 customer support, we make your tech shopping experience seamless and worry-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs