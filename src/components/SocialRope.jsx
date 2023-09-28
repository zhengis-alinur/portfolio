import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"
import Telegram from "../icons/Telegram"

const Item = ({href, children}) => (
	<a className="cursor-pointer" href={href} target="_blank" rel="noreferrer">
		{children}
	</a>
)

const SocialRope = () => {
  return (
	<div className="fixed z-10 right-1 top-0 w-fit flex flex-col items-center md:right-4">
		<div className="w-fit h-36 border-r-2 border-gray"/>
		<div className="flex flex-col gap-1">
			<Item  href="https://github.com/zhengis-alinur">
				<Github />
			</Item>
			<Item  href="https://t.me/zh_alinur">
				<Telegram />
			</Item>
			<Item  href="https://www.linkedin.com/in/zhengis-alinur/">
				<Linkedin />
			</Item>
		</div>
	</div>
  )
}

export default SocialRope