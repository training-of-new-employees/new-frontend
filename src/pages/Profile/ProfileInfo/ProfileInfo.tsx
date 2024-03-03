interface IProfileInfoProps {
  onEditProfileClick: () => void;
  isRole: string | null;
}

export function ProfileInfo(props: IProfileInfoProps) {
  const { isRole, onEditProfileClick } = props;
  const mokProfile = {
    id: 1,
    company_name: 'mokCompany',
    email: 'mokEmail@mal.ru',
    name: 'mokName',
    patronymic: 'mok',
    surname: 'mok',
    position_name: 'mokPosition',
    admin: true,
  };
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
              <div className=" bg-admin-pic bg-no-repeat bg-[24px] w-6 h-6 bg-center object-cover" />
              <p className="text-black rubik14">
                {mokProfile.admin ? 'Администратор' : 'Сотрудник'}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rid gap-5 grid-cols-[680px_120px] items-center mb-8">
            <article className=" flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="exo24">Основная информация</h3>
                {isRole == 'ADMIN' && (
                  <button
                    className="bg-icon-edit bg-no-repeat bg-center w-10 h-10 bg-white cursor-pointer rounded-xl border-none"
                    type="button"
                    aria-label="Редактировать профиль"
                    onClick={onEditProfileClick}
                  />
                )}
              </div>
              <ul className="grid grid-cols-[repeat(2,1fr)] w-[680px] h-[60px]">
                <li className="flex gap-3 w-full">
                  <h3 className="text-addFontColor rubik16">ФИО:</h3>
                  <p className="text-black rubik16;">
                    {`
                    ${
                      mokProfile.surname === 'admin'
                        ? 'Фамилия'
                        : mokProfile.surname === undefined
                          ? ''
                          : mokProfile.surname
                    } 
                 ${mokProfile.name === 'admin' ? 'Имя' : mokProfile.surname === undefined ? '' : mokProfile.name} ${
                   mokProfile.patronymic === 'admin'
                     ? 'Отчество'
                     : mokProfile.surname === undefined
                       ? ''
                       : mokProfile.patronymic
                 }`}
                  </p>
                </li>
                <li className="flex gap-3 w-full">
                  <h3 className="text-addFontColor rubik16">Компания:</h3>
                  <p className="text-black rubik16">{mokProfile.company_name}</p>
                </li>
                <li className="flex gap-3 w-full">
                  <h3 className="text-addFontColor rubik16">E-mail:</h3>
                  <p className="text-black rubik16">{mokProfile.email}</p>
                </li>
                {isRole === 'USER' && (
                  <li className="flex gap-3 w-full">
                    <h3 className="text-addFontColor rubik16">Должность:</h3>
                    <p className="text-black rubik16">{mokProfile.position_name}</p>
                  </li>
                )}
              </ul>
            </article>
            {isRole === 'ADMIN' && (
              <div className="w-[140px] h-[140px] object-cover rounded-[50%] bg-admin-image bg-contain bg-no-repeat" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
