import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IcnTrainingIcon = (props: SvgProps) => (
  <Svg
    width={25} // Adjusted to match the SVG's width
    height={24} // Set the height of the SVG
    viewBox="0 0 25 24" // Set the viewBox to match the SVG's dimensions
    fill="none" // Set fill to none as specified
    {...props} // Spread the rest of the props for customization
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.69796 6C9.57518 6 10.2879 6.71867 10.2879 7.59316L10.2877 10.5451H14.3785L14.3788 7.59316C14.3788 6.71867 15.0916 6 15.9688 6H16.8798C17.7616 6 18.4697 6.71285 18.4697 7.59316L18.4695 7.83419C18.5435 7.82364 18.6191 7.81818 18.6961 7.81818H19.6071C20.4882 7.81818 21.197 8.52828 21.197 9.40686L21.1968 11.2269L21.7581 11.2273C22.0575 11.2273 22.2969 11.448 22.3296 11.7323L22.3334 11.799V13.3828C22.3334 13.7029 22.0758 13.9545 21.7581 13.9545L21.1968 13.9543L21.197 15.775C21.197 16.6528 20.485 17.3636 19.6071 17.3636H18.6961C18.5712 17.3636 18.4498 17.3494 18.3334 17.3224C18.0868 17.88 17.5282 18.2727 16.8798 18.2727H15.9688C15.0869 18.2727 14.3788 17.5599 14.3788 16.6796L14.3785 14.636H10.2877L10.2879 16.6796C10.2879 17.5273 9.63131 18.2197 8.7952 18.2698L8.69796 18.2727H7.78697C7.13852 18.2727 6.57995 17.88 6.33271 17.322C6.21695 17.3494 6.09555 17.3636 5.97069 17.3636H5.0597C4.18174 17.3636 3.46974 16.6528 3.46974 15.775L3.46937 13.9543L2.90866 13.9545C2.59094 13.9545 2.33337 13.7029 2.33337 13.3828V11.799C2.33337 11.4832 2.58618 11.2273 2.90866 11.2273L3.46937 11.2269L3.46974 9.40686C3.46974 8.56082 4.12705 7.87101 4.96253 7.82108L5.0597 7.81818H5.97069C6.04762 7.81818 6.12327 7.82364 6.19729 7.83419L6.19701 7.59316C6.19701 6.71285 6.9051 6 7.78697 6H8.69796ZM8.69796 7.36364H7.78697C7.66027 7.36364 7.56065 7.46393 7.56065 7.59316V16.6796C7.56065 16.8035 7.66541 16.9091 7.78697 16.9091H8.69796C8.82466 16.9091 8.92428 16.8088 8.92428 16.6796V7.59316C8.92428 7.46927 8.81952 7.36364 8.69796 7.36364ZM15.7425 16.6796C15.7425 16.8088 15.8421 16.9091 15.9688 16.9091H16.8798C17.0013 16.9091 17.1061 16.8035 17.1061 16.6796V7.59316C17.1061 7.46393 17.0065 7.36364 16.8798 7.36364H15.9688C15.8472 7.36364 15.7425 7.46927 15.7425 7.59316V16.6796ZM5.97069 9.18182H5.0597C4.93224 9.18182 4.83337 9.28086 4.83337 9.40686V15.775C4.83337 15.8992 4.93436 16 5.0597 16H5.97069C6.09814 16 6.19701 15.901 6.19701 15.775V9.40686C6.19701 9.28264 6.09603 9.18182 5.97069 9.18182ZM19.6071 9.18182H18.6961C18.5707 9.18182 18.4697 9.28264 18.4697 9.40686V15.775C18.4697 15.901 18.5686 16 18.6961 16H19.6071C19.7324 16 19.8334 15.8992 19.8334 15.775V9.40686C19.8334 9.28086 19.7345 9.18182 19.6071 9.18182ZM14.3788 11.9091H10.2879V13.2727H14.3788V11.9091Z"
      fill="#6B7280"
    />
  </Svg>
);

export default IcnTrainingIcon;
