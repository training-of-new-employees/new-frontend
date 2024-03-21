import { observer } from 'mobx-react-lite';
import { useStores } from '../../../utils/context/root-context-store';

interface IProfileInfoProps {
  onEditProfileClick: () => void;
  isRole: string | null;
}

export const ProfileInfo = observer((props: IProfileInfoProps) => {
  const { isRole, onEditProfileClick } = props;
  const { profile } = useStores((state) => state.profileState);
  console.log(profile);

  return (
    <div className="w-[900px] h-[290px] box-border bg-white flex justify-center rounded-[0_0_24px_24px]">
      <div className="flex flex-col gap-7 w-[820px] pt-10 pb-[60px]">
        <div className="flex justify-between h-10 items-center">
          <h2 className="w-[635px] text-[32px] not-italic font-semibold leading-[130%] m-0 p-0">
            Профиль
          </h2>
          <div className="flex items-center text-addFontColor rubik16">
            <p>Роль:</p>
            <div className="flex items-center">
              <div className="bg-admin-pic bg-no-repeat w-6 h-6 bg-center object-cover" />
              <p className="text-black rubik14">
                {profile?.value?.admin ? 'Администратор' : 'Сотрудник'}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-row items-center gap-[8px]">
              <h3 className="exo24 text-[24px] font-[600]">Основная информация</h3>
              {isRole == 'ADMIN' && (
                <button
                  className="bg-icon-edit bg-no-repeat bg-center w-10 h-10 bg-white cursor-pointer rounded-xl border-none"
                  type="button"
                  aria-label="Редактировать профиль"
                  onClick={onEditProfileClick}
                />
              )}
            </div>

            <div className="flex flex-row gap-[12px] h-[60px]">
              <div className="flex flex-col  gap-[12px]">
                <h3 className="text-addFontColor rubik16">ФИО:</h3>
                <h3 className="text-addFontColor rubik16">Email:</h3>
              </div>
              <div className="flex flex-col  gap-[12px] w-[300px]">
                <h3 className="text-fontColor text-[16px] rubik16">
                  {profile?.value?.name} {profile?.value?.patronymic} {profile?.value?.surname}
                </h3>
                <h3 className="text-fontColor text-[16px] rubik16">{profile?.value?.email}</h3>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-row gap-[12px]">
                  <h3 className="text-addFontColor rubik16">Компания:</h3>
                  <h3 className="text-fontColor text-[16px] rubik16">
                    {profile?.value?.company_name}
                  </h3>
                </div>
                {isRole === 'USER' && (
                  <div className="flex flex-row gap-[12px]">
                    <h3 className="text-addFontColor rubik16">Должность:</h3>
                    <p className="text-fontColor text-[16px] rubik16">
                      {profile?.value?.position_name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            {isRole === 'ADMIN' && (
              <div className="w-[140px] h-[140px] object-cover rounded-[50%] bg-image bg-contain bg-no-repeat" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
