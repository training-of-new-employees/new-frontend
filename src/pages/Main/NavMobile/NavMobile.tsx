import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={24} color="white" toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[80px] w-full p-5 bg-[#53772F33] border-b rounded-xl border-b-white/20 z-20"
          >
            <ul className="grid gap-2">
              <li className="w-full p-[0.08rem] rounded-xl">
                <a
                  onClick={() => setOpen((prev) => !prev)}
                  className={'flex items-center justify-between w-full p-5 rounded-xl bg-[#2F302E]'}
                  href={'/#about'}
                >
                  <span className="flex gap-1 text-lg text-white">О нас</span>
                </a>
              </li>

              <li className="w-full p-[0.08rem] rounded-xl">
                <a
                  onClick={() => setOpen((prev) => !prev)}
                  className={'flex items-center justify-between w-full p-5 rounded-xl bg-[#2F302E]'}
                  href={'/#start'}
                >
                  <span className="flex gap-1 text-lg text-white">Как начать</span>
                </a>
              </li>

              <li className="w-full p-[0.08rem] rounded-xl">
                <a
                  onClick={() => setOpen((prev) => !prev)}
                  className={'flex items-center justify-between w-full p-5 rounded-xl bg-[#2F302E]'}
                  href={'/#contacts'}
                >
                  <span className="flex gap-1 text-lg text-white">Контакты</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
