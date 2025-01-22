import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className="rounded-xl bg-white p-5 my-5">
            {bookmark.title}
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}

export default Bookmark;