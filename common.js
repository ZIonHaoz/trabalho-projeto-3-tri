const getcss = (variavel) => {
     const bodystyles = getComputedstyle (document.body)
     return bodystyles.getPropertyValue(variavel)
    }

    const tickConfig = {
        family: getcss('--font'),
        size: 16,
        color: getcss('--primary-color')
        }
    
 export {getcss, tickconfig}