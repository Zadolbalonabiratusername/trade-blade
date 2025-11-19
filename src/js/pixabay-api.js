import axios from 'axios';

const axiosRequest = axios.create({
    baseURL: 'https://pixabay.com/api/',
});

export default async function showGallary(searchText, pageNumber) {
  const options = {
    params: {
      key: '49099070-620059b7e04d01b51519094ba',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: pageNumber,
    },
  };

  const resault = await axiosRequest.get('', options);
  return resault;
}

