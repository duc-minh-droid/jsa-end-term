function useRanLink() {
    let randomId = Math.round(Math.random()*1000)
    let randomLink = `https://picsum.photos/id/${randomId}/1000/1000`
  return randomLink
}

export default useRanLink