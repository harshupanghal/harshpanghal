import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
	return (
		<section className="flex flex-col items-center text-center my-44 px-6 space-y-4 pt-6 pb-8 md:space-y-5 transition-transform duration-300 ">
			<h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
				Let&apos;s Build Something Great Together
			</h2>
			<p className="text-lg mb-6 max-w-md leading-7 text-gray-500 dark:text-gray-400">
				Always eager to collaborate, innovate, and take on exciting challenges.
				If you have an idea or opportunity, let&apos;s connect and make it
				happen!
			</p>
			<div className="flex space-x-6">
				<motion.a
					href="tel:+919729837834"
					className="flex items-center justify-center w-14 h-14 rounded-full border border-current shadow-lg  dark:text-white text-black transition-all ease-in hover:scale-110"
					whileHover={{ rotate: 20 }}
				>
					<Phone size={26} />
				</motion.a>

				<motion.a
					href="mailto:work.harshpanghal@gmail.com"
					className="flex items-center justify-center w-14 h-14 rounded-full border border-current shadow-lg dark:text-white text-black transition-all ease-in hover:scale-110"
					whileHover={{ rotate: -10 }}
				>
					<Mail size={26} />
				</motion.a>
			</div>

			<div className="pt-6">
				<SocialLinks />
			</div>
		</section>
	);
}
