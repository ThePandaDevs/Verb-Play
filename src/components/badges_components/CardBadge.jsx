const CardBadge = (props) => {
    return (
        <>
            <div className="h-36 w-52 card bg-base shadow-2xl justify-center mb-5
                bg-gradient-to-b from-[#00A67E] via-[#00A67E] to-[#ffff]">
                    {props.children}
            </div>
        </>
    )
}

export default CardBadge;