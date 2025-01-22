import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className="rounded-lg mb-5 p-6 text-center bg-[#6047EC1A] text-[#6047EC]">
                <h2>Spend reading time : {readingTime}</h2>
            </div>
            <div className="bg-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold">Bookmark length: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)
                }
            </div>


        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;