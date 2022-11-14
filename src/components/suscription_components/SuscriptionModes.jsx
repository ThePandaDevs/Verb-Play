export const SuscriptionModes = () => {
    return (
        <>
            <div className="grid grid-cols-3 md-grid-cols-1 mt-6 h-96">
                <div className="bg-white rounded-md mx-8 drop-shadow-xl justify-items-center flex flex-col">
                    <p className="text-2xl font-semibold text-[#00A67E] my-4">Basic</p>
                    <div className="bg-[#BCF5E8] py-2">
                        <p className="font-bold text-5xl text-[#00A67E]">$ 0</p>
                        <p className="my-4 font-bold text-md text-[#00A67E]">PER MONTH</p>
                    </div>
                    <div className="items-center px-6 mt-4">
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Pruebas gratuitas de los cursos durante 10 días</p>
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Selección de tipo de aprendizaje</p>
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Acceso a medallas nivel 1</p>
                    </div>
                    <button className="btn glass bg-[#00A67E] w-1/2 self-center my-4 rounded-2xl">Subscribe</button>
                </div>
                <div className="bg-gradient-to-t from-white to-[#00A67E] via-[#ffff] rounded-md mx-8 drop-shadow-xl justify-items-center flex flex-col">
                    <p className="text-2xl font-semibold text-[#ffff] my-4">Personal</p>
                    <div className="bg-[#ffff] py-2">
                        <p className="font-bold text-5xl text-[#00A67E]">$ 5</p>
                        <p className="my-4 font-bold text-md text-[#00A67E]">PER MONTH</p>
                    </div>
                    <div className="items-center px-6 mt-4">
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Juegos ilimitados</p>
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Tests de estilo de aprendizaje ilimitados</p>
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Acceso a medallas nivel 2</p>
                    </div>
                    <button className="btn glass bg-[#00A67E] w-1/2 self-center my-4 rounded-2xl">Subscribe</button>
                </div>
                <div className="bg-white rounded-md mx-8 drop-shadow-xl justify-items-center flex flex-col">
                    <p className="text-2xl font-semibold text-[#00A67E] my-4">English Academy</p>
                    <div className="bg-[#BCF5E8] py-2">
                        <p className="font-bold text-5xl text-[#00A67E]">$ 130</p>
                        <p className="my-4 font-bold text-md text-[#00A67E]">PER MONTH</p>
                    </div>
                    <div className="items-center px-6 mt-4">
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Acceso a 30 licencias personales VerbPlay</p>
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Colaboración con amigos</p>
                        <p className="text-[#00A67E] text-md font-semibold mb-2">- Acceso a medallas especiales</p>
                    </div>
                    <button className="btn glass bg-[#00A67E] w-1/2 self-center my-4 rounded-2xl">Subscribe</button>
                </div>
            </div>
        </>
    )
}