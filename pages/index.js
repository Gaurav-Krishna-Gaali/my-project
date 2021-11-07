import tw from "tailwind-styled-components";
import Map from "./componets/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberLogo>
          <Profile>
            <Name>Gaurav Krishna</Name>
            <UserImage src="https://images.news18.com/ibnlive/uploads/2021/06/1623900306_untitled-design-2021-06-17t085747.057.png?impolicy=website&width=510&height=356" />
          </Profile>
        </Header>
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png " />
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* ActionBtnd */}
        <InputButton>Where to?</InputButton>
        {/* inputbtn */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
    flex flex-col  h-screen
  `;

const ActionItems = tw.div`

  flex-1
  p-4

 `;

const UberLogo = tw.img`
  h-28
`;

const Header = tw.div`
flex items-center justify-between
`;
const Profile = tw.div`
flex items-centre
`;
const Name = tw.div`
mr-4 w-20 text-sm
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const ActionButtons = tw.div` 
flex 
`;
const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-centre rounded-lg tranform hover:scale-105 transition
  text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8

`;
