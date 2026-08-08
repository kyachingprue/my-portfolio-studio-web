import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const LineBounce = () => {
  const stringRef = useRef(null)
   const pathRef = useRef(null)

  useGSAP(
    () => {
      const string = stringRef.current
      const path = pathRef.current

      const finalPath = 'M 10 100 Q 500 100 990 100'

      const handleMouseMove = event => {
        const rect = string.getBoundingClientRect()

        // Convert mouse position to SVG coordinates
        const mouseX = ((event.clientX - rect.left) / rect.width) * 1000

        const mouseY = ((event.clientY - rect.top) / rect.height) * 200

        // Keep the control point inside the SVG
        const x = Math.max(10, Math.min(990, mouseX))
        const y = Math.max(10, Math.min(190, mouseY))

        const newPath = `M 10 100 Q ${x} ${y} 990 100`

        gsap.to(path, {
          attr: {
            d: newPath
          },
          duration: 0.3,
          ease: 'power4.out',
          overwrite: true
        })
      }

      const handleMouseLeave = () => {
        // Spring back like a guitar string
        gsap.to(path, {
          attr: {
            d: finalPath
          },
          duration: 0.3,
          ease: 'elastic.out(1.75, 0.1)',
          overwrite: true
        })
      }

      string.addEventListener('mousemove', handleMouseMove)
      string.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        string.removeEventListener('mousemove', handleMouseMove)
        string.removeEventListener('mouseleave', handleMouseLeave)
      }
    },
    {
      scope: stringRef
    }
  )


  return (
    <div ref={stringRef} className="w-full h-90 cursor-pointer">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default LineBounce
