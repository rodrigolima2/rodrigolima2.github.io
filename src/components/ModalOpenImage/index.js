import useGlobal from '../../hooks/useGlobal';

import './styles.css';

function ModalOpenImage({ img }) {
    const { openModalImage, setOpenModalImage } = useGlobal();

    return (
        <div className={`ModalOpenImage ${openModalImage ? "" : "closed"}`} onClick={() => setOpenModalImage(false)}>
            {img && <img className="ModalOpenImage__img" src={img} alt="Imagem clicada" />}
        </div>
    );
}

export default ModalOpenImage;