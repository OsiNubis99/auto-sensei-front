export const arrayPhotos = (aution) => {
    let addDocuments = aution.additionalDocuments ? aution.additionalDocuments : null;
    let vehicleDamage = aution.vehicleDamage ? aution.vehicleDamage : null;
    let exteriorPhotos = aution.exteriorPhotos ? aution.exteriorPhotos : null;
    let interiorPhotos = aution.interiorPhotos ? aution.interiorPhotos : null;
    let originalDocument = aution.originalDocument ? aution.originalDocument : null;
    let driverLicense = aution.driverLicense ? aution.driverLicense : null;
    let photos = []
    if (exteriorPhotos && exteriorPhotos.length > 0) {
        exteriorPhotos.map((url) => { photos = [...photos, url] })
    }
    if (interiorPhotos && interiorPhotos.length > 0) {
        interiorPhotos.map((url) => { photos = [...photos, url] })
    }
    if (originalDocument) {
        photos = [...photos, originalDocument]
    }
    if (driverLicense) {
        photos = [...photos, driverLicense]
    }
    if (vehicleDamage && vehicleDamage?.length !== 0) {
        vehicleDamage.map((url) => { photos = [...photos, url] })
    }
    if (addDocuments && addDocuments?.length !== 0) {
        addDocuments.map((url) => { photos = [...photos, url] })
    }
    let addNameXPhoto = photos
    let finalPhotos = addNameXPhoto.map((item, i) => {
        let name = item.split("/")
        let newObjet = {
            name: name[2],
            url: item
        }
        return newObjet
    })
    return finalPhotos
}