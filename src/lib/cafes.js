import cafes from "@/data/cafes.json"

export function getCafes() {
    return (
        cafes
    )
}

export function getCafesBySlug(slug) {
    return cafes.find()
}