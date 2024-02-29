import {HomeViewModel} from '@/features/home/viewmodel/homeViewModel';
import {UserModel} from '@/features/home/models/homeModel';

const HomeView = () => {
  // const [users, setUsers] = useState<UserModel[] | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const {users} = HomeViewModel();
  // useEffect(() => {
  //   const a = async () => {
  //     setIsLoading(true);
  //     await HomeViewModel()
  //       .getUserList()
  //       .then((data: UserModel[] | undefined) => {
  //         if (data) {
  //           setUsers(data);
  //           setIsLoading(false);
  //         }
  //       });
  //   };
  //   if (users === null) a();
  // }, [users]);

  return (
    <div>
      {/* {isLoading && <>Loading...</>} */}
      {/* {users != null && (
        <div className="container">
          {users.slice(0, 100).map((user: UserModel) => (
            <div key={user.id}>
              {user.first_name} {user.last_name} - {user.email}
            </div>
          ))}
        </div>
      )} */}
      Home
    </div>
  );
};

export default HomeView;
