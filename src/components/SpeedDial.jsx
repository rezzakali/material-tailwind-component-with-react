import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
} from '@material-tailwind/react';
import {
  AiOutlinePhone,
  AiOutlinePlus,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

function SpeedDialComponent() {
  return (
    <div className="relative w-full h-80">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <AiOutlinePlus className="hidden h-5 w-5 group-hover:block" />
              <AiOutlinePlus className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <a href="tel:+91 9954695660">
              <SpeedDialAction className="dark:bg-[#22262f]">
                <AiOutlinePhone className="h-5 w-5 dark:text-yellow-800" />
              </SpeedDialAction>
            </a>
            <a
              href="https://wa.me/9954695660"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpeedDialAction className="dark:bg-[#22262f]">
                <AiOutlineWhatsApp className="h-5 w-5 dark:text-yellow-800" />
              </SpeedDialAction>
            </a>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export default SpeedDialComponent;
